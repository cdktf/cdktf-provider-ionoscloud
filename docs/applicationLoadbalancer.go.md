# `applicationLoadbalancer` Submodule <a name="`applicationLoadbalancer` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancer <a name="ApplicationLoadbalancer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer ionoscloud_application_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.NewApplicationLoadbalancer(scope Construct, id *string, config ApplicationLoadbalancerConfig) ApplicationLoadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig">ApplicationLoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig">ApplicationLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putFlowlog">PutFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetFlowlog">ResetFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps">ResetLbPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowlog` <a name="PutFlowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putFlowlog"></a>

```go
func PutFlowlog(value ApplicationLoadbalancerFlowlog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putFlowlog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationLoadbalancerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

---

##### `ResetFlowlog` <a name="ResetFlowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetFlowlog"></a>

```go
func ResetFlowlog()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps"></a>

```go
func ResetIps()
```

##### `ResetLbPrivateIps` <a name="ResetLbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps"></a>

```go
func ResetLbPrivateIps()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.ApplicationLoadbalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.ApplicationLoadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.ApplicationLoadbalancer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.ApplicationLoadbalancer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlog">Flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference">ApplicationLoadbalancerFlowlogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlogInput">FlowlogInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput">LbPrivateIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput">ListenerLanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput">TargetLanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps">LbPrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan">ListenerLan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan">TargetLan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Flowlog`<sup>Required</sup> <a name="Flowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlog"></a>

```go
func Flowlog() ApplicationLoadbalancerFlowlogOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference">ApplicationLoadbalancerFlowlogOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts"></a>

```go
func Timeouts() ApplicationLoadbalancerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `FlowlogInput`<sup>Optional</sup> <a name="FlowlogInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlogInput"></a>

```go
func FlowlogInput() ApplicationLoadbalancerFlowlog
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LbPrivateIpsInput`<sup>Optional</sup> <a name="LbPrivateIpsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput"></a>

```go
func LbPrivateIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerLanInput`<sup>Optional</sup> <a name="ListenerLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput"></a>

```go
func ListenerLanInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetLanInput`<sup>Optional</sup> <a name="TargetLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput"></a>

```go
func TargetLanInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `LbPrivateIps`<sup>Required</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps"></a>

```go
func LbPrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan"></a>

```go
func ListenerLan() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan"></a>

```go
func TargetLan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerConfig <a name="ApplicationLoadbalancerConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

&applicationloadbalancer.ApplicationLoadbalancerConfig {
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
	Flowlog: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.applicationLoadbalancer.ApplicationLoadbalancerFlowlog,
	Id: *string,
	Ips: *[]*string,
	LbPrivateIps: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.applicationLoadbalancer.ApplicationLoadbalancerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan">ListenerLan</a></code> | <code>*f64</code> | ID of the listening (inbound) LAN. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan">TargetLan</a></code> | <code>*f64</code> | ID of the balanced private target LAN (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.flowlog">Flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | flowlog block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips">Ips</a></code> | <code>*[]*string</code> | Collection of the Application Load Balancer IP addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps">LbPrivateIps</a></code> | <code>*[]*string</code> | Collection of private IP addresses with the subnet mask of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}.

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan"></a>

```go
ListenerLan *f64
```

- *Type:* *f64

ID of the listening (inbound) LAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#listener_lan ApplicationLoadbalancer#listener_lan}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan"></a>

```go
TargetLan *f64
```

- *Type:* *f64

ID of the balanced private target LAN (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#target_lan ApplicationLoadbalancer#target_lan}

---

##### `Flowlog`<sup>Optional</sup> <a name="Flowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.flowlog"></a>

```go
Flowlog ApplicationLoadbalancerFlowlog
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

flowlog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#flowlog ApplicationLoadbalancer#flowlog}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Collection of the Application Load Balancer IP addresses.

(Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#ips ApplicationLoadbalancer#ips}

---

##### `LbPrivateIps`<sup>Optional</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps"></a>

```go
LbPrivateIps *[]*string
```

- *Type:* *[]*string

Collection of private IP addresses with the subnet mask of the Application Load Balancer.

IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#lb_private_ips ApplicationLoadbalancer#lb_private_ips}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts"></a>

```go
Timeouts ApplicationLoadbalancerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#timeouts ApplicationLoadbalancer#timeouts}

---

### ApplicationLoadbalancerFlowlog <a name="ApplicationLoadbalancerFlowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

&applicationloadbalancer.ApplicationLoadbalancerFlowlog {
	Action: *string,
	Bucket: *string,
	Direction: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.action">Action</a></code> | <code>*string</code> | Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.bucket">Bucket</a></code> | <code>*string</code> | The S3 bucket name of an existing IONOS Cloud S3 bucket. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.direction">Direction</a></code> | <code>*string</code> | Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.name">Name</a></code> | <code>*string</code> | The resource name. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.action"></a>

```go
Action *string
```

- *Type:* *string

Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#action ApplicationLoadbalancer#action}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The S3 bucket name of an existing IONOS Cloud S3 bucket. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#bucket ApplicationLoadbalancer#bucket}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#direction ApplicationLoadbalancer#direction}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}

---

### ApplicationLoadbalancerTimeouts <a name="ApplicationLoadbalancerTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

&applicationloadbalancer.ApplicationLoadbalancerTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.16/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerFlowlogOutputReference <a name="ApplicationLoadbalancerFlowlogOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.NewApplicationLoadbalancerFlowlogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationLoadbalancerFlowlogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationLoadbalancerFlowlog
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

---


### ApplicationLoadbalancerTimeoutsOutputReference <a name="ApplicationLoadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/applicationloadbalancer"

applicationloadbalancer.NewApplicationLoadbalancerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationLoadbalancerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



