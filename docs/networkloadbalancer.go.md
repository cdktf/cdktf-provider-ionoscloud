# `networkloadbalancer` Submodule <a name="`networkloadbalancer` Submodule" id="@cdktf/provider-ionoscloud.networkloadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Networkloadbalancer <a name="Networkloadbalancer" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer ionoscloud_networkloadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.NewNetworkloadbalancer(scope Construct, id *string, config NetworkloadbalancerConfig) Networkloadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig">NetworkloadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig">NetworkloadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putFlowlog">PutFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetCentralLogging">ResetCentralLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetFlowlog">ResetFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLbPrivateIps">ResetLbPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLoggingFormat">ResetLoggingFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowlog` <a name="PutFlowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putFlowlog"></a>

```go
func PutFlowlog(value NetworkloadbalancerFlowlog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putFlowlog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts"></a>

```go
func PutTimeouts(value NetworkloadbalancerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

---

##### `ResetCentralLogging` <a name="ResetCentralLogging" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetCentralLogging"></a>

```go
func ResetCentralLogging()
```

##### `ResetFlowlog` <a name="ResetFlowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetFlowlog"></a>

```go
func ResetFlowlog()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetIps"></a>

```go
func ResetIps()
```

##### `ResetLbPrivateIps` <a name="ResetLbPrivateIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLbPrivateIps"></a>

```go
func ResetLbPrivateIps()
```

##### `ResetLoggingFormat` <a name="ResetLoggingFormat" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLoggingFormat"></a>

```go
func ResetLoggingFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Networkloadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.Networkloadbalancer_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.Networkloadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.Networkloadbalancer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.Networkloadbalancer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Networkloadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Networkloadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Networkloadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Networkloadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlog">Flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference">NetworkloadbalancerFlowlogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference">NetworkloadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLoggingInput">CentralLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlogInput">FlowlogInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIpsInput">LbPrivateIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLanInput">ListenerLanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormatInput">LoggingFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLanInput">TargetLanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLogging">CentralLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIps">LbPrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLan">ListenerLan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormat">LoggingFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLan">TargetLan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Flowlog`<sup>Required</sup> <a name="Flowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlog"></a>

```go
func Flowlog() NetworkloadbalancerFlowlogOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference">NetworkloadbalancerFlowlogOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeouts"></a>

```go
func Timeouts() NetworkloadbalancerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference">NetworkloadbalancerTimeoutsOutputReference</a>

---

##### `CentralLoggingInput`<sup>Optional</sup> <a name="CentralLoggingInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLoggingInput"></a>

```go
func CentralLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `FlowlogInput`<sup>Optional</sup> <a name="FlowlogInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlogInput"></a>

```go
func FlowlogInput() NetworkloadbalancerFlowlog
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LbPrivateIpsInput`<sup>Optional</sup> <a name="LbPrivateIpsInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIpsInput"></a>

```go
func LbPrivateIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerLanInput`<sup>Optional</sup> <a name="ListenerLanInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLanInput"></a>

```go
func ListenerLanInput() *f64
```

- *Type:* *f64

---

##### `LoggingFormatInput`<sup>Optional</sup> <a name="LoggingFormatInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormatInput"></a>

```go
func LoggingFormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetLanInput`<sup>Optional</sup> <a name="TargetLanInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLanInput"></a>

```go
func TargetLanInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CentralLogging`<sup>Required</sup> <a name="CentralLogging" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLogging"></a>

```go
func CentralLogging() interface{}
```

- *Type:* interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `LbPrivateIps`<sup>Required</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIps"></a>

```go
func LbPrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLan"></a>

```go
func ListenerLan() *f64
```

- *Type:* *f64

---

##### `LoggingFormat`<sup>Required</sup> <a name="LoggingFormat" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormat"></a>

```go
func LoggingFormat() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLan"></a>

```go
func TargetLan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkloadbalancerConfig <a name="NetworkloadbalancerConfig" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

&networkloadbalancer.NetworkloadbalancerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	ListenerLan: *f64,
	Name: *string,
	TargetLan: *f64,
	CentralLogging: interface{},
	Flowlog: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.networkloadbalancer.NetworkloadbalancerFlowlog,
	Id: *string,
	Ips: *[]*string,
	LbPrivateIps: *[]*string,
	LoggingFormat: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.networkloadbalancer.NetworkloadbalancerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.listenerLan">ListenerLan</a></code> | <code>*f64</code> | Id of the listening LAN. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.name">Name</a></code> | <code>*string</code> | A name of that Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.targetLan">TargetLan</a></code> | <code>*f64</code> | Id of the balanced private target LAN. (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.centralLogging">CentralLogging</a></code> | <code>interface{}</code> | Turn logging on and off for this product. Default value is 'false'. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.flowlog">Flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a></code> | flowlog block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#id Networkloadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.ips">Ips</a></code> | <code>*[]*string</code> | Collection of IP addresses of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lbPrivateIps">LbPrivateIps</a></code> | <code>*[]*string</code> | Collection of private IP addresses with subnet mask of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.loggingFormat">LoggingFormat</a></code> | <code>*string</code> | Specifies the format of the logs. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}.

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.listenerLan"></a>

```go
ListenerLan *f64
```

- *Type:* *f64

Id of the listening LAN. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#listener_lan Networkloadbalancer#listener_lan}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name of that Network Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#name Networkloadbalancer#name}

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.targetLan"></a>

```go
TargetLan *f64
```

- *Type:* *f64

Id of the balanced private target LAN. (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#target_lan Networkloadbalancer#target_lan}

---

##### `CentralLogging`<sup>Optional</sup> <a name="CentralLogging" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.centralLogging"></a>

```go
CentralLogging interface{}
```

- *Type:* interface{}

Turn logging on and off for this product. Default value is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#central_logging Networkloadbalancer#central_logging}

---

##### `Flowlog`<sup>Optional</sup> <a name="Flowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.flowlog"></a>

```go
Flowlog NetworkloadbalancerFlowlog
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

flowlog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#flowlog Networkloadbalancer#flowlog}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#id Networkloadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Collection of IP addresses of the Network Load Balancer.

(inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public load balancer and private IP for the private load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#ips Networkloadbalancer#ips}

---

##### `LbPrivateIps`<sup>Optional</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lbPrivateIps"></a>

```go
LbPrivateIps *[]*string
```

- *Type:* *[]*string

Collection of private IP addresses with subnet mask of the Network Load Balancer.

IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#lb_private_ips Networkloadbalancer#lb_private_ips}

---

##### `LoggingFormat`<sup>Optional</sup> <a name="LoggingFormat" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.loggingFormat"></a>

```go
LoggingFormat *string
```

- *Type:* *string

Specifies the format of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#logging_format Networkloadbalancer#logging_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.timeouts"></a>

```go
Timeouts NetworkloadbalancerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#timeouts Networkloadbalancer#timeouts}

---

### NetworkloadbalancerFlowlog <a name="NetworkloadbalancerFlowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

&networkloadbalancer.NetworkloadbalancerFlowlog {
	Action: *string,
	Bucket: *string,
	Direction: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.action">Action</a></code> | <code>*string</code> | Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.bucket">Bucket</a></code> | <code>*string</code> | The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.direction">Direction</a></code> | <code>*string</code> | Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.name">Name</a></code> | <code>*string</code> | The resource name. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.action"></a>

```go
Action *string
```

- *Type:* *string

Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#action Networkloadbalancer#action}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#bucket Networkloadbalancer#bucket}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#direction Networkloadbalancer#direction}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#name Networkloadbalancer#name}

---

### NetworkloadbalancerTimeouts <a name="NetworkloadbalancerTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

&networkloadbalancer.NetworkloadbalancerTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#create Networkloadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#default Networkloadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#update Networkloadbalancer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#create Networkloadbalancer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#default Networkloadbalancer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/networkloadbalancer#update Networkloadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkloadbalancerFlowlogOutputReference <a name="NetworkloadbalancerFlowlogOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.NewNetworkloadbalancerFlowlogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkloadbalancerFlowlogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkloadbalancerFlowlog
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

---


### NetworkloadbalancerTimeoutsOutputReference <a name="NetworkloadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/networkloadbalancer"

networkloadbalancer.NewNetworkloadbalancerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkloadbalancerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



