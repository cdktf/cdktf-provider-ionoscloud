# `autoscalingGroup` Submodule <a name="`autoscalingGroup` Submodule" id="@cdktf/provider-ionoscloud.autoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroup <a name="AutoscalingGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group ionoscloud_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroup(scope Construct, id *string, config AutoscalingGroupConfig) AutoscalingGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig">AutoscalingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig">AutoscalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration">PutReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy"></a>

```go
func PutPolicy(value AutoscalingGroupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---

##### `PutReplicaConfiguration` <a name="PutReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration"></a>

```go
func PutReplicaConfiguration(value AutoscalingGroupReplicaConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts"></a>

```go
func PutTimeouts(value AutoscalingGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.AutoscalingGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.AutoscalingGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.AutoscalingGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.AutoscalingGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutoscalingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutoscalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference">AutoscalingGroupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference">AutoscalingGroupReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policyInput">PolicyInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfigurationInput">ReplicaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policy"></a>

```go
func Policy() AutoscalingGroupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference">AutoscalingGroupPolicyOutputReference</a>

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfiguration"></a>

```go
func ReplicaConfiguration() AutoscalingGroupReplicaConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference">AutoscalingGroupReplicaConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeouts"></a>

```go
func Timeouts() AutoscalingGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policyInput"></a>

```go
func PolicyInput() AutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---

##### `ReplicaConfigurationInput`<sup>Optional</sup> <a name="ReplicaConfigurationInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfigurationInput"></a>

```go
func ReplicaConfigurationInput() AutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupConfig <a name="AutoscalingGroupConfig" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	MaxReplicaCount: *f64,
	MinReplicaCount: *f64,
	Name: *string,
	Policy: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.autoscalingGroup.AutoscalingGroupPolicy,
	ReplicaConfiguration: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.autoscalingGroup.AutoscalingGroupReplicaConfiguration,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.autoscalingGroup.AutoscalingGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Unique identifier for the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | The maximum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | The minimum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.name">Name</a></code> | <code>*string</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Unique identifier for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#datacenter_id AutoscalingGroup#datacenter_id}

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.maxReplicaCount"></a>

```go
MaxReplicaCount *f64
```

- *Type:* *f64

The maximum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#max_replica_count AutoscalingGroup#max_replica_count}

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.minReplicaCount"></a>

```go
MinReplicaCount *f64
```

- *Type:* *f64

The minimum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#min_replica_count AutoscalingGroup#min_replica_count}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.policy"></a>

```go
Policy AutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#policy AutoscalingGroup#policy}

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.replicaConfiguration"></a>

```go
ReplicaConfiguration AutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#replica_configuration AutoscalingGroup#replica_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.timeouts"></a>

```go
Timeouts AutoscalingGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

### AutoscalingGroupPolicy <a name="AutoscalingGroupPolicy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupPolicy {
	Metric: *string,
	ScaleInAction: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.autoscalingGroup.AutoscalingGroupPolicyScaleInAction,
	ScaleInThreshold: *f64,
	ScaleOutAction: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction,
	ScaleOutThreshold: *f64,
	Unit: *string,
	Range: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.metric">Metric</a></code> | <code>*string</code> | The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInAction">ScaleInAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | scale_in_action block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInThreshold">ScaleInThreshold</a></code> | <code>*f64</code> | The upper threshold for the value of the 'metric'. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutAction">ScaleOutAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | scale_out_action block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutThreshold">ScaleOutThreshold</a></code> | <code>*f64</code> | The upper threshold for the value of the 'metric'. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.unit">Unit</a></code> | <code>*string</code> | Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.range">Range</a></code> | <code>*string</code> | Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#metric AutoscalingGroup#metric}

---

##### `ScaleInAction`<sup>Required</sup> <a name="ScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInAction"></a>

```go
ScaleInAction AutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

scale_in_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#scale_in_action AutoscalingGroup#scale_in_action}

---

##### `ScaleInThreshold`<sup>Required</sup> <a name="ScaleInThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInThreshold"></a>

```go
ScaleInThreshold *f64
```

- *Type:* *f64

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scale_out_action' property. The value must have a lower minimum delta to the 'scale_in_threshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#scale_in_threshold AutoscalingGroup#scale_in_threshold}

---

##### `ScaleOutAction`<sup>Required</sup> <a name="ScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutAction"></a>

```go
ScaleOutAction AutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

scale_out_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#scale_out_action AutoscalingGroup#scale_out_action}

---

##### `ScaleOutThreshold`<sup>Required</sup> <a name="ScaleOutThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutThreshold"></a>

```go
ScaleOutThreshold *f64
```

- *Type:* *f64

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scaleOutAction' property. The value must have a lower minimum delta to the 'scaleInThreshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#scale_out_threshold AutoscalingGroup#scale_out_threshold}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#unit AutoscalingGroup#unit}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.range"></a>

```go
Range *string
```

- *Type:* *string

Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#range AutoscalingGroup#range}

---

### AutoscalingGroupPolicyScaleInAction <a name="AutoscalingGroupPolicyScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupPolicyScaleInAction {
	Amount: *f64,
	AmountType: *string,
	DeleteVolumes: interface{},
	CooldownPeriod: *string,
	TerminationPolicyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amount">Amount</a></code> | <code>*f64</code> | When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amountType">AmountType</a></code> | <code>*string</code> | The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE]. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.deleteVolumes">DeleteVolumes</a></code> | <code>interface{}</code> | If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | The minimum time that elapses after the start of this scaling action until the following scaling action is started. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.terminationPolicyType">TerminationPolicyType</a></code> | <code>*string</code> | The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas. |

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always removed. Note that for 'SCALE_IN' operations, volumes are not deleted after the server is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

##### `AmountType`<sup>Required</sup> <a name="AmountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amountType"></a>

```go
AmountType *string
```

- *Type:* *string

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

##### `DeleteVolumes`<sup>Required</sup> <a name="DeleteVolumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.deleteVolumes"></a>

```go
DeleteVolumes interface{}
```

- *Type:* interface{}

If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted.

When set to 'false', all volumes remain in the datacenter and must be deleted manually. Note that every scale-out creates new volumes. When they are not deleted, they will eventually use all of your contracts resource limits. At this point, scaling out would not be possible anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#delete_volumes AutoscalingGroup#delete_volumes}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.cooldownPeriod"></a>

```go
CooldownPeriod *string
```

- *Type:* *string

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

##### `TerminationPolicyType`<sup>Optional</sup> <a name="TerminationPolicyType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.terminationPolicyType"></a>

```go
TerminationPolicyType *string
```

- *Type:* *string

The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas.

The default termination policy is 'OLDEST_SERVER_FIRST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#termination_policy_type AutoscalingGroup#termination_policy_type}

---

### AutoscalingGroupPolicyScaleOutAction <a name="AutoscalingGroupPolicyScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupPolicyScaleOutAction {
	Amount: *f64,
	AmountType: *string,
	CooldownPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amount">Amount</a></code> | <code>*f64</code> | When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amountType">AmountType</a></code> | <code>*string</code> | The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE]. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | The minimum time that elapses after the start of this scaling action until the following scaling action is started. |

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amount"></a>

```go
Amount *f64
```

- *Type:* *f64

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always added or removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

##### `AmountType`<sup>Required</sup> <a name="AmountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amountType"></a>

```go
AmountType *string
```

- *Type:* *string

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.cooldownPeriod"></a>

```go
CooldownPeriod *string
```

- *Type:* *string

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

### AutoscalingGroupReplicaConfiguration <a name="AutoscalingGroupReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupReplicaConfiguration {
	AvailabilityZone: *string,
	Cores: *f64,
	Ram: *f64,
	CpuFamily: *string,
	Nic: interface{},
	Volume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The zone where the VMs are created using this configuration. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cores">Cores</a></code> | <code>*f64</code> | The total number of cores for the VMs. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.ram">Ram</a></code> | <code>*f64</code> | The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cpuFamily">CpuFamily</a></code> | <code>*string</code> | The zone where the VMs are created using this configuration. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.nic">Nic</a></code> | <code>interface{}</code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.volume">Volume</a></code> | <code>interface{}</code> | volume block. |

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#availability_zone AutoscalingGroup#availability_zone}

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cores"></a>

```go
Cores *f64
```

- *Type:* *f64

The total number of cores for the VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#cores AutoscalingGroup#cores}

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.ram"></a>

```go
Ram *f64
```

- *Type:* *f64

The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#ram AutoscalingGroup#ram}

---

##### `CpuFamily`<sup>Optional</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cpuFamily"></a>

```go
CpuFamily *string
```

- *Type:* *string

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#cpu_family AutoscalingGroup#cpu_family}

---

##### `Nic`<sup>Optional</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.nic"></a>

```go
Nic interface{}
```

- *Type:* interface{}

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#nic AutoscalingGroup#nic}

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.volume"></a>

```go
Volume interface{}
```

- *Type:* interface{}

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#volume AutoscalingGroup#volume}

---

### AutoscalingGroupReplicaConfigurationNic <a name="AutoscalingGroupReplicaConfigurationNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupReplicaConfigurationNic {
	Lan: *f64,
	Name: *string,
	Dhcp: interface{},
	FirewallActive: interface{},
	FirewallRule: interface{},
	FirewallType: *string,
	FlowLog: interface{},
	TargetGroup: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.lan">Lan</a></code> | <code>*f64</code> | Lan ID for this replica Nic. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.name">Name</a></code> | <code>*string</code> | Name for this replica NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Dhcp flag for this replica Nic. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | Activate or deactivate the firewall. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallRule">FirewallRule</a></code> | <code>interface{}</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallType">FirewallType</a></code> | <code>*string</code> | The type of firewall rules that will be allowed on the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.flowLog">FlowLog</a></code> | <code>interface{}</code> | flow_log block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | target_group block. |

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.lan"></a>

```go
Lan *f64
```

- *Type:* *f64

Lan ID for this replica Nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#lan AutoscalingGroup#lan}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for this replica NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Dhcp flag for this replica Nic.

This is an optional attribute with default value of 'true' if not given in the request payload or given as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#dhcp AutoscalingGroup#dhcp}

---

##### `FirewallActive`<sup>Optional</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallActive"></a>

```go
FirewallActive interface{}
```

- *Type:* interface{}

Activate or deactivate the firewall.

By default, an active firewall without any defined rules will block all incoming network traffic except for the firewall rules that explicitly allows certain protocols, IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#firewall_active AutoscalingGroup#firewall_active}

---

##### `FirewallRule`<sup>Optional</sup> <a name="FirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallRule"></a>

```go
FirewallRule interface{}
```

- *Type:* interface{}

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#firewall_rule AutoscalingGroup#firewall_rule}

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallType"></a>

```go
FirewallType *string
```

- *Type:* *string

The type of firewall rules that will be allowed on the NIC.

If not specified, the default INGRESS value is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#firewall_type AutoscalingGroup#firewall_type}

---

##### `FlowLog`<sup>Optional</sup> <a name="FlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.flowLog"></a>

```go
FlowLog interface{}
```

- *Type:* interface{}

flow_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#flow_log AutoscalingGroup#flow_log}

---

##### `TargetGroup`<sup>Optional</sup> <a name="TargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.targetGroup"></a>

```go
TargetGroup AutoscalingGroupReplicaConfigurationNicTargetGroup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#target_group AutoscalingGroup#target_group}

---

### AutoscalingGroupReplicaConfigurationNicFirewallRule <a name="AutoscalingGroupReplicaConfigurationNicFirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupReplicaConfigurationNicFirewallRule {
	Protocol: *string,
	IcmpCode: *f64,
	IcmpType: *f64,
	Name: *string,
	PortRangeEnd: *f64,
	PortRangeStart: *f64,
	SourceIp: *string,
	SourceMac: *string,
	TargetIp: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol for the rule. The property cannot be modified after its creation (not allowed in update requests). |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | Sets the allowed code (from 0 to 254) when ICMP protocol is selected. The value 'null' allows all codes. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpType">IcmpType</a></code> | <code>*f64</code> | Sets the allowed type (from 0 to 254) if the protocol ICMP is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.name">Name</a></code> | <code>*string</code> | The name of the firewall rule. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | Sets the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | Sets the initial range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceIp">SourceIp</a></code> | <code>*string</code> | Only traffic originating from the respective IPv4 address is permitted. The value 'null' allows traffic from any IP address. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceMac">SourceMac</a></code> | <code>*string</code> | Only traffic originating from the respective MAC address is permitted. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.targetIp">TargetIp</a></code> | <code>*string</code> | If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address of the NIC is allowed. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.type">Type</a></code> | <code>*string</code> | The firewall rule type. If not specified, the default value 'INGRESS' is used. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol for the rule. The property cannot be modified after its creation (not allowed in update requests).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#protocol AutoscalingGroup#protocol}

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpCode"></a>

```go
IcmpCode *f64
```

- *Type:* *f64

Sets the allowed code (from 0 to 254) when ICMP protocol is selected. The value 'null' allows all codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#icmp_code AutoscalingGroup#icmp_code}

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpType"></a>

```go
IcmpType *f64
```

- *Type:* *f64

Sets the allowed type (from 0 to 254) if the protocol ICMP is selected.

The value 'null' allows all types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#icmp_type AutoscalingGroup#icmp_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `PortRangeEnd`<sup>Optional</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeEnd"></a>

```go
PortRangeEnd *f64
```

- *Type:* *f64

Sets the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected.

The value 'null' for 'port_range_start' and 'port_range_end' allows all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#port_range_end AutoscalingGroup#port_range_end}

---

##### `PortRangeStart`<sup>Optional</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeStart"></a>

```go
PortRangeStart *f64
```

- *Type:* *f64

Sets the initial range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected.

The value 'null' for 'port_range_start' and 'port_range_end' allows all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#port_range_start AutoscalingGroup#port_range_start}

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceIp"></a>

```go
SourceIp *string
```

- *Type:* *string

Only traffic originating from the respective IPv4 address is permitted. The value 'null' allows traffic from any IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#source_ip AutoscalingGroup#source_ip}

---

##### `SourceMac`<sup>Optional</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceMac"></a>

```go
SourceMac *string
```

- *Type:* *string

Only traffic originating from the respective MAC address is permitted.

Valid format: 'aa:bb:cc:dd:ee:ff'. The value 'null' allows traffic from any MAC address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#source_mac AutoscalingGroup#source_mac}

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.targetIp"></a>

```go
TargetIp *string
```

- *Type:* *string

If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address of the NIC is allowed.

The value 'null' allows traffic to any target IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#target_ip AutoscalingGroup#target_ip}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.type"></a>

```go
Type *string
```

- *Type:* *string

The firewall rule type. If not specified, the default value 'INGRESS' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#type AutoscalingGroup#type}

---

### AutoscalingGroupReplicaConfigurationNicFlowLog <a name="AutoscalingGroupReplicaConfigurationNicFlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupReplicaConfigurationNicFlowLog {
	Action: *string,
	Bucket: *string,
	Direction: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.action">Action</a></code> | <code>*string</code> | Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.bucket">Bucket</a></code> | <code>*string</code> | The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.direction">Direction</a></code> | <code>*string</code> | Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.name">Name</a></code> | <code>*string</code> | The resource name. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.action"></a>

```go
Action *string
```

- *Type:* *string

Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#action AutoscalingGroup#action}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#bucket AutoscalingGroup#bucket}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#direction AutoscalingGroup#direction}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

### AutoscalingGroupReplicaConfigurationNicTargetGroup <a name="AutoscalingGroupReplicaConfigurationNicTargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupReplicaConfigurationNicTargetGroup {
	Port: *f64,
	TargetGroupId: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.port">Port</a></code> | <code>*f64</code> | The port for the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.targetGroupId">TargetGroupId</a></code> | <code>*string</code> | The ID of the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.weight">Weight</a></code> | <code>*f64</code> | The weight for the target group. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port for the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#port AutoscalingGroup#port}

---

##### `TargetGroupId`<sup>Required</sup> <a name="TargetGroupId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.targetGroupId"></a>

```go
TargetGroupId *string
```

- *Type:* *string

The ID of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#target_group_id AutoscalingGroup#target_group_id}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight for the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#weight AutoscalingGroup#weight}

---

### AutoscalingGroupReplicaConfigurationVolume <a name="AutoscalingGroupReplicaConfigurationVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupReplicaConfigurationVolume {
	BootOrder: *string,
	Name: *string,
	Size: *f64,
	Type: *string,
	BackupUnitId: *string,
	Bus: *string,
	Image: *string,
	ImageAlias: *string,
	ImagePassword: *string,
	SshKeys: *[]*string,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bootOrder">BootOrder</a></code> | <code>*string</code> | Determines whether the volume will be used as a boot volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.name">Name</a></code> | <code>*string</code> | Name for this replica volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.size">Size</a></code> | <code>*f64</code> | User-defined size for this replica volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.type">Type</a></code> | <code>*string</code> | Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bus">Bus</a></code> | <code>*string</code> | The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.image">Image</a></code> | <code>*string</code> | The image installed on the disk. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imageAlias">ImageAlias</a></code> | <code>*string</code> | The image installed on the volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Image password for this replica volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.userData">UserData</a></code> | <code>*string</code> | User-data (Cloud Init) for this replica volume. |

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bootOrder"></a>

```go
BootOrder *string
```

- *Type:* *string

Determines whether the volume will be used as a boot volume.

Set to NONE, the volume will not be used as boot volume.
Set to PRIMARY, the volume will be used as boot volume and set to AUTO will delegate the decision to the provisioning engine to decide whether to use the volume as boot volume.
Notice that exactly one volume can be set to PRIMARY or all of them set to AUTO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#boot_order AutoscalingGroup#boot_order}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

User-defined size for this replica volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#size AutoscalingGroup#size}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.type"></a>

```go
Type *string
```

- *Type:* *string

Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#type AutoscalingGroup#type}

---

##### `BackupUnitId`<sup>Optional</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.backupUnitId"></a>

```go
BackupUnitId *string
```

- *Type:* *string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#backup_unit_id AutoscalingGroup#backup_unit_id}

---

##### `Bus`<sup>Optional</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bus"></a>

```go
Bus *string
```

- *Type:* *string

The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#bus AutoscalingGroup#bus}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.image"></a>

```go
Image *string
```

- *Type:* *string

The image installed on the disk.

Currently, only the UUID of the image is supported. Note that either 'image' or 'imageAlias' must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#image AutoscalingGroup#image}

---

##### `ImageAlias`<sup>Optional</sup> <a name="ImageAlias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imageAlias"></a>

```go
ImageAlias *string
```

- *Type:* *string

The image installed on the volume.

Must be an 'imageAlias' as specified via the images API. Note that one of 'image' or 'imageAlias' must be set, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#image_alias AutoscalingGroup#image_alias}

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Image password for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#image_password AutoscalingGroup#image_password}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

User-data (Cloud Init) for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#user_data AutoscalingGroup#user_data}

---

### AutoscalingGroupTimeouts <a name="AutoscalingGroupTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

&autoscalinggroup.AutoscalingGroupTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#create AutoscalingGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#default AutoscalingGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#update AutoscalingGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#create AutoscalingGroup#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#default AutoscalingGroup#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/autoscaling_group#update AutoscalingGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupPolicyOutputReference <a name="AutoscalingGroupPolicyOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction">PutScaleInAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction">PutScaleOutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInAction` <a name="PutScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction"></a>

```go
func PutScaleInAction(value AutoscalingGroupPolicyScaleInAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---

##### `PutScaleOutAction` <a name="PutScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction"></a>

```go
func PutScaleOutAction(value AutoscalingGroupPolicyScaleOutAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resetRange"></a>

```go
func ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInAction">ScaleInAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference">AutoscalingGroupPolicyScaleInActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutAction">ScaleOutAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference">AutoscalingGroupPolicyScaleOutActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.rangeInput">RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInActionInput">ScaleInActionInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThresholdInput">ScaleInThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutActionInput">ScaleOutActionInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThresholdInput">ScaleOutThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThreshold">ScaleInThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThreshold">ScaleOutThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInAction`<sup>Required</sup> <a name="ScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInAction"></a>

```go
func ScaleInAction() AutoscalingGroupPolicyScaleInActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference">AutoscalingGroupPolicyScaleInActionOutputReference</a>

---

##### `ScaleOutAction`<sup>Required</sup> <a name="ScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutAction"></a>

```go
func ScaleOutAction() AutoscalingGroupPolicyScaleOutActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference">AutoscalingGroupPolicyScaleOutActionOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.rangeInput"></a>

```go
func RangeInput() *string
```

- *Type:* *string

---

##### `ScaleInActionInput`<sup>Optional</sup> <a name="ScaleInActionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInActionInput"></a>

```go
func ScaleInActionInput() AutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---

##### `ScaleInThresholdInput`<sup>Optional</sup> <a name="ScaleInThresholdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThresholdInput"></a>

```go
func ScaleInThresholdInput() *f64
```

- *Type:* *f64

---

##### `ScaleOutActionInput`<sup>Optional</sup> <a name="ScaleOutActionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutActionInput"></a>

```go
func ScaleOutActionInput() AutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---

##### `ScaleOutThresholdInput`<sup>Optional</sup> <a name="ScaleOutThresholdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThresholdInput"></a>

```go
func ScaleOutThresholdInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `ScaleInThreshold`<sup>Required</sup> <a name="ScaleInThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThreshold"></a>

```go
func ScaleInThreshold() *f64
```

- *Type:* *f64

---

##### `ScaleOutThreshold`<sup>Required</sup> <a name="ScaleOutThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThreshold"></a>

```go
func ScaleOutThreshold() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---


### AutoscalingGroupPolicyScaleInActionOutputReference <a name="AutoscalingGroupPolicyScaleInActionOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupPolicyScaleInActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupPolicyScaleInActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetTerminationPolicyType">ResetTerminationPolicyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetCooldownPeriod"></a>

```go
func ResetCooldownPeriod()
```

##### `ResetTerminationPolicyType` <a name="ResetTerminationPolicyType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetTerminationPolicyType"></a>

```go
func ResetTerminationPolicyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountTypeInput">AmountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumesInput">DeleteVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyTypeInput">TerminationPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountType">AmountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes">DeleteVolumes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType">TerminationPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `AmountTypeInput`<sup>Optional</sup> <a name="AmountTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountTypeInput"></a>

```go
func AmountTypeInput() *string
```

- *Type:* *string

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriodInput"></a>

```go
func CooldownPeriodInput() *string
```

- *Type:* *string

---

##### `DeleteVolumesInput`<sup>Optional</sup> <a name="DeleteVolumesInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumesInput"></a>

```go
func DeleteVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `TerminationPolicyTypeInput`<sup>Optional</sup> <a name="TerminationPolicyTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyTypeInput"></a>

```go
func TerminationPolicyTypeInput() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `AmountType`<sup>Required</sup> <a name="AmountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountType"></a>

```go
func AmountType() *string
```

- *Type:* *string

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod"></a>

```go
func CooldownPeriod() *string
```

- *Type:* *string

---

##### `DeleteVolumes`<sup>Required</sup> <a name="DeleteVolumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes"></a>

```go
func DeleteVolumes() interface{}
```

- *Type:* interface{}

---

##### `TerminationPolicyType`<sup>Required</sup> <a name="TerminationPolicyType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType"></a>

```go
func TerminationPolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---


### AutoscalingGroupPolicyScaleOutActionOutputReference <a name="AutoscalingGroupPolicyScaleOutActionOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupPolicyScaleOutActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupPolicyScaleOutActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resetCooldownPeriod"></a>

```go
func ResetCooldownPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountInput">AmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountTypeInput">AmountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType">AmountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountInput"></a>

```go
func AmountInput() *f64
```

- *Type:* *f64

---

##### `AmountTypeInput`<sup>Optional</sup> <a name="AmountTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountTypeInput"></a>

```go
func AmountTypeInput() *string
```

- *Type:* *string

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriodInput"></a>

```go
func CooldownPeriodInput() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `AmountType`<sup>Required</sup> <a name="AmountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType"></a>

```go
func AmountType() *string
```

- *Type:* *string

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod"></a>

```go
func CooldownPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---


### AutoscalingGroupReplicaConfigurationNicFirewallRuleList <a name="AutoscalingGroupReplicaConfigurationNicFirewallRuleList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicFirewallRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutoscalingGroupReplicaConfigurationNicFirewallRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.get"></a>

```go
func Get(index *f64) AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference <a name="AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeEnd">ResetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeStart">ResetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceMac">ResetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRangeEnd` <a name="ResetPortRangeEnd" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeEnd"></a>

```go
func ResetPortRangeEnd()
```

##### `ResetPortRangeStart` <a name="ResetPortRangeStart" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeStart"></a>

```go
func ResetPortRangeStart()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetSourceMac` <a name="ResetSourceMac" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceMac"></a>

```go
func ResetSourceMac()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetTargetIp"></a>

```go
func ResetTargetIp()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEndInput">PortRangeEndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStartInput">PortRangeStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMacInput">SourceMacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpType">IcmpType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMac">SourceMac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIp">TargetIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *f64
```

- *Type:* *f64

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeEndInput`<sup>Optional</sup> <a name="PortRangeEndInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEndInput"></a>

```go
func PortRangeEndInput() *f64
```

- *Type:* *f64

---

##### `PortRangeStartInput`<sup>Optional</sup> <a name="PortRangeStartInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStartInput"></a>

```go
func PortRangeStartInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() *string
```

- *Type:* *string

---

##### `SourceMacInput`<sup>Optional</sup> <a name="SourceMacInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMacInput"></a>

```go
func SourceMacInput() *string
```

- *Type:* *string

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIpInput"></a>

```go
func TargetIpInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *f64
```

- *Type:* *f64

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpType"></a>

```go
func IcmpType() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEnd"></a>

```go
func PortRangeEnd() *f64
```

- *Type:* *f64

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStart"></a>

```go
func PortRangeStart() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMac"></a>

```go
func SourceMac() *string
```

- *Type:* *string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIp"></a>

```go
func TargetIp() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationNicFlowLogList <a name="AutoscalingGroupReplicaConfigurationNicFlowLogList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicFlowLogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutoscalingGroupReplicaConfigurationNicFlowLogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.get"></a>

```go
func Get(index *f64) AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference <a name="AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicFlowLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationNicList <a name="AutoscalingGroupReplicaConfigurationNicList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutoscalingGroupReplicaConfigurationNicList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get"></a>

```go
func Get(index *f64) AutoscalingGroupReplicaConfigurationNicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationNicOutputReference <a name="AutoscalingGroupReplicaConfigurationNicOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutoscalingGroupReplicaConfigurationNicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFirewallRule">PutFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFlowLog">PutFlowLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallActive">ResetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallRule">ResetFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFlowLog">ResetFlowLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetTargetGroup">ResetTargetGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallRule` <a name="PutFirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFirewallRule"></a>

```go
func PutFirewallRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFirewallRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFlowLog` <a name="PutFlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFlowLog"></a>

```go
func PutFlowLog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFlowLog.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putTargetGroup"></a>

```go
func PutTargetGroup(value AutoscalingGroupReplicaConfigurationNicTargetGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetDhcp"></a>

```go
func ResetDhcp()
```

##### `ResetFirewallActive` <a name="ResetFirewallActive" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallActive"></a>

```go
func ResetFirewallActive()
```

##### `ResetFirewallRule` <a name="ResetFirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallRule"></a>

```go
func ResetFirewallRule()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallType"></a>

```go
func ResetFirewallType()
```

##### `ResetFlowLog` <a name="ResetFlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFlowLog"></a>

```go
func ResetFlowLog()
```

##### `ResetTargetGroup` <a name="ResetTargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetTargetGroup"></a>

```go
func ResetTargetGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRule">FirewallRule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList">AutoscalingGroupReplicaConfigurationNicFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLog">FlowLog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList">AutoscalingGroupReplicaConfigurationNicFlowLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference">AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActiveInput">FirewallActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRuleInput">FirewallRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLogInput">FlowLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lanInput">LanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lan">Lan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirewallRule`<sup>Required</sup> <a name="FirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRule"></a>

```go
func FirewallRule() AutoscalingGroupReplicaConfigurationNicFirewallRuleList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList">AutoscalingGroupReplicaConfigurationNicFirewallRuleList</a>

---

##### `FlowLog`<sup>Required</sup> <a name="FlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLog"></a>

```go
func FlowLog() AutoscalingGroupReplicaConfigurationNicFlowLogList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList">AutoscalingGroupReplicaConfigurationNicFlowLogList</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroup"></a>

```go
func TargetGroup() AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference">AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference</a>

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallActiveInput`<sup>Optional</sup> <a name="FirewallActiveInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActiveInput"></a>

```go
func FirewallActiveInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallRuleInput`<sup>Optional</sup> <a name="FirewallRuleInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRuleInput"></a>

```go
func FirewallRuleInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallTypeInput"></a>

```go
func FirewallTypeInput() *string
```

- *Type:* *string

---

##### `FlowLogInput`<sup>Optional</sup> <a name="FlowLogInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLogInput"></a>

```go
func FlowLogInput() interface{}
```

- *Type:* interface{}

---

##### `LanInput`<sup>Optional</sup> <a name="LanInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lanInput"></a>

```go
func LanInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroupInput"></a>

```go
func TargetGroupInput() AutoscalingGroupReplicaConfigurationNicTargetGroup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `FirewallActive`<sup>Required</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActive"></a>

```go
func FirewallActive() interface{}
```

- *Type:* interface{}

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lan"></a>

```go
func Lan() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference <a name="AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupIdInput">TargetGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupId">TargetGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TargetGroupIdInput`<sup>Optional</sup> <a name="TargetGroupIdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupIdInput"></a>

```go
func TargetGroupIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TargetGroupId`<sup>Required</sup> <a name="TargetGroupId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupId"></a>

```go
func TargetGroupId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoscalingGroupReplicaConfigurationNicTargetGroup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---


### AutoscalingGroupReplicaConfigurationOutputReference <a name="AutoscalingGroupReplicaConfigurationOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupReplicaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic">PutNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetCpuFamily">ResetCpuFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetNic">ResetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNic` <a name="PutNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic"></a>

```go
func PutNic(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume"></a>

```go
func PutVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCpuFamily` <a name="ResetCpuFamily" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetCpuFamily"></a>

```go
func ResetCpuFamily()
```

##### `ResetNic` <a name="ResetNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetNic"></a>

```go
func ResetNic()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetVolume"></a>

```go
func ResetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList">AutoscalingGroupReplicaConfigurationNicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList">AutoscalingGroupReplicaConfigurationVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.coresInput">CoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamilyInput">CpuFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nicInput">NicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ramInput">RamInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volumeInput">VolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cores">Cores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily">CpuFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ram">Ram</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nic"></a>

```go
func Nic() AutoscalingGroupReplicaConfigurationNicList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList">AutoscalingGroupReplicaConfigurationNicList</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volume"></a>

```go
func Volume() AutoscalingGroupReplicaConfigurationVolumeList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList">AutoscalingGroupReplicaConfigurationVolumeList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.coresInput"></a>

```go
func CoresInput() *f64
```

- *Type:* *f64

---

##### `CpuFamilyInput`<sup>Optional</sup> <a name="CpuFamilyInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamilyInput"></a>

```go
func CpuFamilyInput() *string
```

- *Type:* *string

---

##### `NicInput`<sup>Optional</sup> <a name="NicInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nicInput"></a>

```go
func NicInput() interface{}
```

- *Type:* interface{}

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ramInput"></a>

```go
func RamInput() *f64
```

- *Type:* *f64

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volumeInput"></a>

```go
func VolumeInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cores"></a>

```go
func Cores() *f64
```

- *Type:* *f64

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily"></a>

```go
func CpuFamily() *string
```

- *Type:* *string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ram"></a>

```go
func Ram() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---


### AutoscalingGroupReplicaConfigurationVolumeList <a name="AutoscalingGroupReplicaConfigurationVolumeList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutoscalingGroupReplicaConfigurationVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get"></a>

```go
func Get(index *f64) AutoscalingGroupReplicaConfigurationVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupReplicaConfigurationVolumeOutputReference <a name="AutoscalingGroupReplicaConfigurationVolumeOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupReplicaConfigurationVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutoscalingGroupReplicaConfigurationVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBackupUnitId">ResetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBus">ResetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImageAlias">ResetImageAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupUnitId` <a name="ResetBackupUnitId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBackupUnitId"></a>

```go
func ResetBackupUnitId()
```

##### `ResetBus` <a name="ResetBus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBus"></a>

```go
func ResetBus()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetImageAlias` <a name="ResetImageAlias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImageAlias"></a>

```go
func ResetImageAlias()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetUserData"></a>

```go
func ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitIdInput">BackupUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrderInput">BootOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.busInput">BusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAliasInput">ImageAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder">BootOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus">Bus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias">ImageAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupUnitIdInput`<sup>Optional</sup> <a name="BackupUnitIdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitIdInput"></a>

```go
func BackupUnitIdInput() *string
```

- *Type:* *string

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrderInput"></a>

```go
func BootOrderInput() *string
```

- *Type:* *string

---

##### `BusInput`<sup>Optional</sup> <a name="BusInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.busInput"></a>

```go
func BusInput() *string
```

- *Type:* *string

---

##### `ImageAliasInput`<sup>Optional</sup> <a name="ImageAliasInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAliasInput"></a>

```go
func ImageAliasInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId"></a>

```go
func BackupUnitId() *string
```

- *Type:* *string

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder"></a>

```go
func BootOrder() *string
```

- *Type:* *string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus"></a>

```go
func Bus() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageAlias`<sup>Required</sup> <a name="ImageAlias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias"></a>

```go
func ImageAlias() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingGroupTimeoutsOutputReference <a name="AutoscalingGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/autoscalinggroup"

autoscalinggroup.NewAutoscalingGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



