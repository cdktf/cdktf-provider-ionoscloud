# `nsgFirewallrule` Submodule <a name="`nsgFirewallrule` Submodule" id="@cdktf/provider-ionoscloud.nsgFirewallrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NsgFirewallrule <a name="NsgFirewallrule" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule ionoscloud_nsg_firewallrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

nsgfirewallrule.NewNsgFirewallrule(scope Construct, id *string, config NsgFirewallruleConfig) NsgFirewallrule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig">NsgFirewallruleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig">NsgFirewallruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd">ResetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart">ResetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac">ResetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts"></a>

```go
func PutTimeouts(value NsgFirewallruleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRangeEnd` <a name="ResetPortRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd"></a>

```go
func ResetPortRangeEnd()
```

##### `ResetPortRangeStart` <a name="ResetPortRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart"></a>

```go
func ResetPortRangeStart()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetSourceMac` <a name="ResetSourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac"></a>

```go
func ResetSourceMac()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp"></a>

```go
func ResetTargetIp()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

nsgfirewallrule.NsgFirewallrule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

nsgfirewallrule.NsgFirewallrule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

nsgfirewallrule.NsgFirewallrule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

nsgfirewallrule.NsgFirewallrule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NsgFirewallrule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NsgFirewallrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NsgFirewallrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput">NsgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput">PortRangeEndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput">PortRangeStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput">SourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput">SourceMacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput">TargetIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType">IcmpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId">NsgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac">SourceMac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp">TargetIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts"></a>

```go
func Timeouts() NsgFirewallruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *string
```

- *Type:* *string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NsgIdInput`<sup>Optional</sup> <a name="NsgIdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput"></a>

```go
func NsgIdInput() *string
```

- *Type:* *string

---

##### `PortRangeEndInput`<sup>Optional</sup> <a name="PortRangeEndInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput"></a>

```go
func PortRangeEndInput() *f64
```

- *Type:* *f64

---

##### `PortRangeStartInput`<sup>Optional</sup> <a name="PortRangeStartInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput"></a>

```go
func PortRangeStartInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput"></a>

```go
func SourceIpInput() *string
```

- *Type:* *string

---

##### `SourceMacInput`<sup>Optional</sup> <a name="SourceMacInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput"></a>

```go
func SourceMacInput() *string
```

- *Type:* *string

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput"></a>

```go
func TargetIpInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode"></a>

```go
func IcmpCode() *string
```

- *Type:* *string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType"></a>

```go
func IcmpType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NsgId`<sup>Required</sup> <a name="NsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId"></a>

```go
func NsgId() *string
```

- *Type:* *string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd"></a>

```go
func PortRangeEnd() *f64
```

- *Type:* *f64

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart"></a>

```go
func PortRangeStart() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac"></a>

```go
func SourceMac() *string
```

- *Type:* *string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp"></a>

```go
func TargetIp() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NsgFirewallruleConfig <a name="NsgFirewallruleConfig" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

&nsgfirewallrule.NsgFirewallruleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	NsgId: *string,
	Protocol: *string,
	IcmpCode: *string,
	IcmpType: *string,
	Id: *string,
	Name: *string,
	PortRangeEnd: *f64,
	PortRangeStart: *f64,
	SourceIp: *string,
	SourceMac: *string,
	TargetIp: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.nsgFirewallrule.NsgFirewallruleTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId">NsgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType">IcmpType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp">SourceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac">SourceMac</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp">TargetIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}.

---

##### `NsgId`<sup>Required</sup> <a name="NsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId"></a>

```go
NsgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode"></a>

```go
IcmpCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType"></a>

```go
IcmpType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}.

---

##### `PortRangeEnd`<sup>Optional</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd"></a>

```go
PortRangeEnd *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}.

---

##### `PortRangeStart`<sup>Optional</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart"></a>

```go
PortRangeStart *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp"></a>

```go
SourceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}.

---

##### `SourceMac`<sup>Optional</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac"></a>

```go
SourceMac *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}.

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp"></a>

```go
TargetIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts"></a>

```go
Timeouts NsgFirewallruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#timeouts NsgFirewallrule#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}.

---

### NsgFirewallruleTimeouts <a name="NsgFirewallruleTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

&nsgfirewallrule.NsgFirewallruleTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NsgFirewallruleTimeoutsOutputReference <a name="NsgFirewallruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/nsgfirewallrule"

nsgfirewallrule.NewNsgFirewallruleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NsgFirewallruleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



