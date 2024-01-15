# `networkloadbalancerForwardingrule` Submodule <a name="`networkloadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkloadbalancerForwardingrule <a name="NetworkloadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule ionoscloud_networkloadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NewNetworkloadbalancerForwardingrule(scope Construct, id *string, config NetworkloadbalancerForwardingruleConfig) NetworkloadbalancerForwardingrule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig">NetworkloadbalancerForwardingruleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig">NetworkloadbalancerForwardingruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck"></a>

```go
func PutHealthCheck(value NetworkloadbalancerForwardingruleHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts"></a>

```go
func PutTimeouts(value NetworkloadbalancerForwardingruleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NetworkloadbalancerForwardingrule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NetworkloadbalancerForwardingrule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NetworkloadbalancerForwardingrule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NetworkloadbalancerForwardingrule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkloadbalancerForwardingrule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkloadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkloadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference">NetworkloadbalancerForwardingruleHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList">NetworkloadbalancerForwardingruleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference">NetworkloadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIpInput">ListenerIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPortInput">ListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput">NetworkloadbalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIp">ListenerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerId">NetworkloadbalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheck"></a>

```go
func HealthCheck() NetworkloadbalancerForwardingruleHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference">NetworkloadbalancerForwardingruleHealthCheckOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targets"></a>

```go
func Targets() NetworkloadbalancerForwardingruleTargetsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList">NetworkloadbalancerForwardingruleTargetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeouts"></a>

```go
func Timeouts() NetworkloadbalancerForwardingruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference">NetworkloadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheckInput"></a>

```go
func HealthCheckInput() NetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenerIpInput`<sup>Optional</sup> <a name="ListenerIpInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIpInput"></a>

```go
func ListenerIpInput() *string
```

- *Type:* *string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPortInput"></a>

```go
func ListenerPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkloadbalancerIdInput`<sup>Optional</sup> <a name="NetworkloadbalancerIdInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput"></a>

```go
func NetworkloadbalancerIdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIp"></a>

```go
func ListenerIp() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkloadbalancerId`<sup>Required</sup> <a name="NetworkloadbalancerId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerId"></a>

```go
func NetworkloadbalancerId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkloadbalancerForwardingruleConfig <a name="NetworkloadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

&networkloadbalancerforwardingrule.NetworkloadbalancerForwardingruleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Algorithm: *string,
	DatacenterId: *string,
	ListenerIp: *string,
	ListenerPort: *f64,
	Name: *string,
	NetworkloadbalancerId: *string,
	Protocol: *string,
	Targets: interface{},
	HealthCheck: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Algorithm for the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerIp">ListenerIp</a></code> | <code>*string</code> | Listening IP. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | Listening port number. (inbound) (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.name">Name</a></code> | <code>*string</code> | A name of that Network Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId">NetworkloadbalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Protocol of the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.targets">Targets</a></code> | <code>interface{}</code> | targets block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Algorithm for the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#algorithm NetworkloadbalancerForwardingrule#algorithm}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}.

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerIp"></a>

```go
ListenerIp *string
```

- *Type:* *string

Listening IP. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#listener_ip NetworkloadbalancerForwardingrule#listener_ip}

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerPort"></a>

```go
ListenerPort *f64
```

- *Type:* *f64

Listening port number. (inbound) (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#listener_port NetworkloadbalancerForwardingrule#listener_port}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name of that Network Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#name NetworkloadbalancerForwardingrule#name}

---

##### `NetworkloadbalancerId`<sup>Required</sup> <a name="NetworkloadbalancerId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId"></a>

```go
NetworkloadbalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Protocol of the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#protocol NetworkloadbalancerForwardingrule#protocol}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#targets NetworkloadbalancerForwardingrule#targets}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.healthCheck"></a>

```go
HealthCheck NetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.timeouts"></a>

```go
Timeouts NetworkloadbalancerForwardingruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#timeouts NetworkloadbalancerForwardingrule#timeouts}

---

### NetworkloadbalancerForwardingruleHealthCheck <a name="NetworkloadbalancerForwardingruleHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

&networkloadbalancerforwardingrule.NetworkloadbalancerForwardingruleHealthCheck {
	ClientTimeout: *f64,
	ConnectTimeout: *f64,
	Retries: *f64,
	TargetTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | ClientTimeout is expressed in milliseconds. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.retries">Retries</a></code> | <code>*f64</code> | Retries specifies the number of retries to perform on a target VM after a connection failure. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.targetTimeout">TargetTimeout</a></code> | <code>*f64</code> | TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side. |

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.clientTimeout"></a>

```go
ClientTimeout *f64
```

- *Type:* *f64

ClientTimeout is expressed in milliseconds.

This inactivity timeout applies when the client is expected to acknowledge or send data. If unset the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#client_timeout NetworkloadbalancerForwardingrule#client_timeout}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed.

If unset, the default of 5 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#connect_timeout NetworkloadbalancerForwardingrule#connect_timeout}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Retries specifies the number of retries to perform on a target VM after a connection failure.

If unset, the default value of 3 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#retries NetworkloadbalancerForwardingrule#retries}

---

##### `TargetTimeout`<sup>Optional</sup> <a name="TargetTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.targetTimeout"></a>

```go
TargetTimeout *f64
```

- *Type:* *f64

TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side.

If unset, the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#target_timeout NetworkloadbalancerForwardingrule#target_timeout}

---

### NetworkloadbalancerForwardingruleTargets <a name="NetworkloadbalancerForwardingruleTargets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

&networkloadbalancerforwardingrule.NetworkloadbalancerForwardingruleTargets {
	Ip: *string,
	Port: *f64,
	Weight: *f64,
	HealthCheck: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck,
	ProxyProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.ip">Ip</a></code> | <code>*string</code> | IP of a balanced target VM. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.port">Port</a></code> | <code>*f64</code> | Port of the balanced target service. (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.weight">Weight</a></code> | <code>*f64</code> | Weight parameter is used to adjust the target VM's weight relative to other target VMs. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.proxyProtocol">ProxyProtocol</a></code> | <code>*string</code> | Proxy protocol version. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP of a balanced target VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#ip NetworkloadbalancerForwardingrule#ip}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port of the balanced target service. (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#port NetworkloadbalancerForwardingrule#port}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Weight parameter is used to adjust the target VM's weight relative to other target VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#weight NetworkloadbalancerForwardingrule#weight}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.healthCheck"></a>

```go
HealthCheck NetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `ProxyProtocol`<sup>Optional</sup> <a name="ProxyProtocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.proxyProtocol"></a>

```go
ProxyProtocol *string
```

- *Type:* *string

Proxy protocol version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#proxy_protocol NetworkloadbalancerForwardingrule#proxy_protocol}

---

### NetworkloadbalancerForwardingruleTargetsHealthCheck <a name="NetworkloadbalancerForwardingruleTargetsHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

&networkloadbalancerforwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck {
	Check: interface{},
	CheckInterval: *f64,
	Maintenance: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.check">Check</a></code> | <code>interface{}</code> | Check specifies whether the target VM's health is checked. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.checkInterval">CheckInterval</a></code> | <code>*f64</code> | CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.maintenance">Maintenance</a></code> | <code>interface{}</code> | Maintenance specifies if a target VM should be marked as down, even if it is not. |

---

##### `Check`<sup>Optional</sup> <a name="Check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.check"></a>

```go
Check interface{}
```

- *Type:* interface{}

Check specifies whether the target VM's health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#check NetworkloadbalancerForwardingrule#check}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.checkInterval"></a>

```go
CheckInterval *f64
```

- *Type:* *f64

CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#check_interval NetworkloadbalancerForwardingrule#check_interval}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.maintenance"></a>

```go
Maintenance interface{}
```

- *Type:* interface{}

Maintenance specifies if a target VM should be marked as down, even if it is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#maintenance NetworkloadbalancerForwardingrule#maintenance}

---

### NetworkloadbalancerForwardingruleTimeouts <a name="NetworkloadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

&networkloadbalancerforwardingrule.NetworkloadbalancerForwardingruleTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkloadbalancerForwardingruleHealthCheckOutputReference <a name="NetworkloadbalancerForwardingruleHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NewNetworkloadbalancerForwardingruleHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkloadbalancerForwardingruleHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetTargetTimeout">ResetTargetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetClientTimeout"></a>

```go
func ResetClientTimeout()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetTargetTimeout` <a name="ResetTargetTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetTargetTimeout"></a>

```go
func ResetTargetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeoutInput">TargetTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout">TargetTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeoutInput"></a>

```go
func ClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `TargetTimeoutInput`<sup>Optional</sup> <a name="TargetTimeoutInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeoutInput"></a>

```go
func TargetTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ClientTimeout`<sup>Required</sup> <a name="ClientTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout"></a>

```go
func ClientTimeout() *f64
```

- *Type:* *f64

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `TargetTimeout`<sup>Required</sup> <a name="TargetTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout"></a>

```go
func TargetTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---


### NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference <a name="NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NewNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheck">ResetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetMaintenance">ResetMaintenance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheck` <a name="ResetCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheck"></a>

```go
func ResetCheck()
```

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheckInterval"></a>

```go
func ResetCheckInterval()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetMaintenance"></a>

```go
func ResetMaintenance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInput">CheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenanceInput">MaintenanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check">Check</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance">Maintenance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckInput`<sup>Optional</sup> <a name="CheckInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInput"></a>

```go
func CheckInput() interface{}
```

- *Type:* interface{}

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkIntervalInput"></a>

```go
func CheckIntervalInput() *f64
```

- *Type:* *f64

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenanceInput"></a>

```go
func MaintenanceInput() interface{}
```

- *Type:* interface{}

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check"></a>

```go
func Check() interface{}
```

- *Type:* interface{}

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval"></a>

```go
func CheckInterval() *f64
```

- *Type:* *f64

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance"></a>

```go
func Maintenance() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---


### NetworkloadbalancerForwardingruleTargetsList <a name="NetworkloadbalancerForwardingruleTargetsList" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NewNetworkloadbalancerForwardingruleTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkloadbalancerForwardingruleTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get"></a>

```go
func Get(index *f64) NetworkloadbalancerForwardingruleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkloadbalancerForwardingruleTargetsOutputReference <a name="NetworkloadbalancerForwardingruleTargetsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NewNetworkloadbalancerForwardingruleTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkloadbalancerForwardingruleTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetProxyProtocol">ResetProxyProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck"></a>

```go
func PutHealthCheck(value NetworkloadbalancerForwardingruleTargetsHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetProxyProtocol` <a name="ResetProxyProtocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetProxyProtocol"></a>

```go
func ResetProxyProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference">NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocolInput">ProxyProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol">ProxyProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck"></a>

```go
func HealthCheck() NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference">NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference</a>

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheckInput"></a>

```go
func HealthCheckInput() NetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProxyProtocolInput`<sup>Optional</sup> <a name="ProxyProtocolInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocolInput"></a>

```go
func ProxyProtocolInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProxyProtocol`<sup>Required</sup> <a name="ProxyProtocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol"></a>

```go
func ProxyProtocol() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkloadbalancerForwardingruleTimeoutsOutputReference <a name="NetworkloadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/networkloadbalancerforwardingrule"

networkloadbalancerforwardingrule.NewNetworkloadbalancerForwardingruleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkloadbalancerForwardingruleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



