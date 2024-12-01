# `natgatewayRule` Submodule <a name="`natgatewayRule` Submodule" id="@cdktf/provider-ionoscloud.natgatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NatgatewayRule <a name="NatgatewayRule" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule ionoscloud_natgateway_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NewNatgatewayRule(scope Construct, id *string, config NatgatewayRuleConfig) NatgatewayRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig">NatgatewayRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig">NatgatewayRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange">PutTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetPortRange">ResetTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetSubnet">ResetTargetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetPortRange` <a name="PutTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange"></a>

```go
func PutTargetPortRange(value NatgatewayRuleTargetPortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts"></a>

```go
func PutTimeouts(value NatgatewayRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetTargetPortRange` <a name="ResetTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetPortRange"></a>

```go
func ResetTargetPortRange()
```

##### `ResetTargetSubnet` <a name="ResetTargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetSubnet"></a>

```go
func ResetTargetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NatgatewayRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NatgatewayRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NatgatewayRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NatgatewayRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NatgatewayRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NatgatewayRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NatgatewayRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NatgatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NatgatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRange">TargetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference">NatgatewayRuleTargetPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference">NatgatewayRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayIdInput">NatgatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIpInput">PublicIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnetInput">SourceSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRangeInput">TargetPortRangeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnetInput">TargetSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayId">NatgatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnet">SourceSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnet">TargetSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetPortRange`<sup>Required</sup> <a name="TargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRange"></a>

```go
func TargetPortRange() NatgatewayRuleTargetPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference">NatgatewayRuleTargetPortRangeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeouts"></a>

```go
func Timeouts() NatgatewayRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference">NatgatewayRuleTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatgatewayIdInput`<sup>Optional</sup> <a name="NatgatewayIdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayIdInput"></a>

```go
func NatgatewayIdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `PublicIpInput`<sup>Optional</sup> <a name="PublicIpInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIpInput"></a>

```go
func PublicIpInput() *string
```

- *Type:* *string

---

##### `SourceSubnetInput`<sup>Optional</sup> <a name="SourceSubnetInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnetInput"></a>

```go
func SourceSubnetInput() *string
```

- *Type:* *string

---

##### `TargetPortRangeInput`<sup>Optional</sup> <a name="TargetPortRangeInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRangeInput"></a>

```go
func TargetPortRangeInput() NatgatewayRuleTargetPortRange
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---

##### `TargetSubnetInput`<sup>Optional</sup> <a name="TargetSubnetInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnetInput"></a>

```go
func TargetSubnetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatgatewayId`<sup>Required</sup> <a name="NatgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayId"></a>

```go
func NatgatewayId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `SourceSubnet`<sup>Required</sup> <a name="SourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnet"></a>

```go
func SourceSubnet() *string
```

- *Type:* *string

---

##### `TargetSubnet`<sup>Required</sup> <a name="TargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnet"></a>

```go
func TargetSubnet() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NatgatewayRuleConfig <a name="NatgatewayRuleConfig" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

&natgatewayrule.NatgatewayRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Name: *string,
	NatgatewayId: *string,
	PublicIp: *string,
	SourceSubnet: *string,
	Id: *string,
	Protocol: *string,
	TargetPortRange: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange,
	TargetSubnet: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.natgatewayRule.NatgatewayRuleTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.natgatewayId">NatgatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.publicIp">PublicIp</a></code> | <code>*string</code> | Public IP address of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.sourceSubnet">SourceSubnet</a></code> | <code>*string</code> | Source subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#id NatgatewayRule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Protocol of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetPortRange">TargetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | target_port_range block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetSubnet">TargetSubnet</a></code> | <code>*string</code> | Target or destination subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.type">Type</a></code> | <code>*string</code> | Type of the NAT gateway rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#name NatgatewayRule#name}

---

##### `NatgatewayId`<sup>Required</sup> <a name="NatgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.natgatewayId"></a>

```go
NatgatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}.

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.publicIp"></a>

```go
PublicIp *string
```

- *Type:* *string

Public IP address of the NAT gateway rule.

Specifies the address used for masking outgoing packets source address field. Should be one of the customer reserved IP address already configured on the NAT gateway resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#public_ip NatgatewayRule#public_ip}

---

##### `SourceSubnet`<sup>Required</sup> <a name="SourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.sourceSubnet"></a>

```go
SourceSubnet *string
```

- *Type:* *string

Source subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#source_subnet NatgatewayRule#source_subnet}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#id NatgatewayRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Protocol of the NAT gateway rule.

Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#protocol NatgatewayRule#protocol}

---

##### `TargetPortRange`<sup>Optional</sup> <a name="TargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetPortRange"></a>

```go
TargetPortRange NatgatewayRuleTargetPortRange
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

target_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#target_port_range NatgatewayRule#target_port_range}

---

##### `TargetSubnet`<sup>Optional</sup> <a name="TargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetSubnet"></a>

```go
TargetSubnet *string
```

- *Type:* *string

Target or destination subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets destination IP address. If none is provided, rule will match any address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#target_subnet NatgatewayRule#target_subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.timeouts"></a>

```go
Timeouts NatgatewayRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#timeouts NatgatewayRule#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#type NatgatewayRule#type}

---

### NatgatewayRuleTargetPortRange <a name="NatgatewayRuleTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

&natgatewayrule.NatgatewayRuleTargetPortRange {
	End: *f64,
	Start: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.end">End</a></code> | <code>*f64</code> | Target port range end associated with the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.start">Start</a></code> | <code>*f64</code> | Target port range start associated with the NAT gateway rule. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.end"></a>

```go
End *f64
```

- *Type:* *f64

Target port range end associated with the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#end NatgatewayRule#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

Target port range start associated with the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#start NatgatewayRule#start}

---

### NatgatewayRuleTimeouts <a name="NatgatewayRuleTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

&natgatewayrule.NatgatewayRuleTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#create NatgatewayRule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#default NatgatewayRule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#delete NatgatewayRule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#update NatgatewayRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#create NatgatewayRule#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#default NatgatewayRule#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#delete NatgatewayRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/natgateway_rule#update NatgatewayRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NatgatewayRuleTargetPortRangeOutputReference <a name="NatgatewayRuleTargetPortRangeOutputReference" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NewNatgatewayRuleTargetPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NatgatewayRuleTargetPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() NatgatewayRuleTargetPortRange
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---


### NatgatewayRuleTimeoutsOutputReference <a name="NatgatewayRuleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/natgatewayrule"

natgatewayrule.NewNatgatewayRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NatgatewayRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



